package com.medical.app.models.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
public class AppointmentResponse {
    private Long id;
    private LocalDate appointmentDate;
    private LocalTime appointmentTime;
    private Long doctorId;
    private Long patientId;
    private boolean reminder;
    private boolean status;
}
