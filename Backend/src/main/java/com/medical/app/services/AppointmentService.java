package com.medical.app.services;

import com.medical.app.models.Appointment;
import com.medical.app.models.Patient;
import com.medical.app.models.request.AppointmentCancelRequest;
import com.medical.app.models.response.DoctorAppointmentResponse;
import com.medical.app.repository.AppointmentRepository;
import com.medical.app.repository.DoctorRepository;
import com.medical.app.repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private DoctorRepository doctorRepository;
    @Autowired
    private PatientRepository patientRepository;

    public void createAppointment(Appointment appointment) {
        // Aquí puedes realizar validaciones adicionales antes de guardar la cita
        appointmentRepository.save(appointment);
    }

    public boolean isDailyAppointmentLimitReached(Long doctorId, LocalDate appointmentDate, int limit) {
        // Obtener todas las citas del médico en la fecha dada
        List<Appointment> appointmentsOnDate = appointmentRepository.findByDoctorIdAndDate(doctorId, appointmentDate);

        // Verificar si el límite diario se ha alcanzado
        return appointmentsOnDate.size() >= limit;
    }
    /*
    public LocalDate getNextAvailableDate(Long doctorId, LocalDate currentDate) {
        LocalDate nextDate = currentDate.plusDays(1);

        return nextDate;
    }*/


    public boolean isAppointmentExist(Long doctorId, LocalDate appointmentDate, LocalTime adjustedTime) {
        //  todas las citas del médico en la fecha dada
        List<Appointment> appointmentsOnDate = appointmentRepository.findByDoctorIdAndDate(doctorId, appointmentDate);
        // Verificar si ya existe una cita para el médico en la fecha y hora dadas
        return appointmentsOnDate.stream()
                .anyMatch(appointment -> appointment.getTime().equals(adjustedTime));
    }
/*
    public boolean isDateTimeAvailable(Long doctorId, LocalDate date, LocalTime time) {
        return !isAppointmentExist(doctorId, date, time) &&
                !isDailyAppointmentLimitReached(doctorId, date, 5);
    }
*/


    public List<DoctorAppointmentResponse> findAvailableDoctorsBySpecialtyAndDateTime(String specialty,
                                                                                      LocalDate appointmentDate,
                                                                                      LocalTime appointmentTime) {
        return appointmentRepository.findAvailableDoctorsBySpecialtyAndDateTime(specialty, appointmentDate, appointmentTime);
    }

    public void cancelAppointment(AppointmentCancelRequest cancelRequest) {

        int patientDni = cancelRequest.getPatientDni();
        LocalDate appointmentDate = cancelRequest.getAppointmentDate();
        LocalTime appointmentTime = cancelRequest.getAppointmentTime();

        Patient patient = patientRepository.findByDni(patientDni);

        if (patient != null) {
            Appointment appointment = appointmentRepository.findByPatientIdAndDateAndTime(
                    patient.getId(), appointmentDate, appointmentTime);

            if (appointment != null) {
                // Establecer el estado de la cita como cancelada
                appointment.setStatus(false);

                // Guardar la cita actualizada en la base de datos
                appointmentRepository.save(appointment);
            } else {
                throw new EntityNotFoundException("No se encontró una cita para el paciente con DNI: " + patientDni +
                        " en la fecha y hora especificadas.");
            }
        } else {
            throw new EntityNotFoundException("No se encontró al paciente con DNI: " + patientDni);
        }
    }

    public boolean isPatientAlreadyBooked(Long patientId, LocalDate appointmentDate, LocalTime requestedTime) {
        return appointmentRepository.existsByPatientIdAndDateAndTime(patientId, appointmentDate, requestedTime);

    }

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();

    }

    public void deleteAppointment(Long appointmentId) {
        Optional<Appointment> appointmentOptional = appointmentRepository.findById(appointmentId);

        if (appointmentOptional.isPresent()) {
            appointmentRepository.deleteById(appointmentId);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No se encontró la cita con ID: " + appointmentId);
        }
    }
}