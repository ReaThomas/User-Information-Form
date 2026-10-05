package com.userinformation.backend.controller;

import com.userinformation.backend.model.User;
import com.userinformation.backend.repository.UserRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.ByteArrayOutputStream;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@CrossOrigin(origins = "https://innovative-curiosity-production.up.railway.app")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/api/users")
    public User createUser(@RequestBody User user) {

        System.out.println("User information received:");
        System.out.println("Name: " + user.getName());
        System.out.println("Email: " + user.getEmail());
        System.out.println("Current Status: " + user.getCurrentStatus());

        return userRepository.save(user);
    }

    @GetMapping("/api/users")
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }

    @GetMapping("/api/users/export/csv")
    public ResponseEntity<byte[]> exportUsersAsCsv() {

        List<User> users = userRepository.findAll();

        StringBuilder csv = new StringBuilder();

        // CSV header
        csv.append("ID,Name,DOB,Gender,Blood Group,School Name,10th Percentage,12th Percentage,")
           .append("College Name,Department/Degree,CGPA,Graduation Year,Highest Qualification,")
           .append("Current City,Email,Mobile,Address,State,Pincode,Current Status,Job Title,")
           .append("Company Name,Years of Experience,LinkedIn Profile,Github Profile\n");

        // CSV data
        for (User user : users) {

            csv.append(user.getId()).append(",")
               .append(escapeCsv(user.getName())).append(",")
               .append(escapeCsv(user.getDob())).append(",")
               .append(escapeCsv(user.getGender())).append(",")
               .append(escapeCsv(user.getBloodGroup())).append(",")
               .append(escapeCsv(user.getSchoolName())).append(",")
               .append(user.getTenthPercentage()).append(",")
               .append(user.getTwelfthPercentage()).append(",")
               .append(escapeCsv(user.getCollegeName())).append(",")
               .append(escapeCsv(user.getDepartmentOrDegree())).append(",")
               .append(user.getCgpa()).append(",")
               .append(user.getGraduationYear()).append(",")
               .append(escapeCsv(user.getHighestQualification())).append(",")
               .append(escapeCsv(user.getCurrentCity())).append(",")
               .append(escapeCsv(user.getEmail())).append(",")
               .append(escapeCsv(user.getMobile())).append(",")
               .append(escapeCsv(user.getAddress())).append(",")
               .append(escapeCsv(user.getState())).append(",")
               .append(escapeCsv(user.getPincode())).append(",")
               .append(escapeCsv(user.getCurrentStatus())).append(",")
               .append(escapeCsv(user.getJobTitle())).append(",")
               .append(escapeCsv(user.getCompanyName())).append(",")
               .append(user.getYearsOfExperience()).append(",")
               .append(escapeCsv(user.getLinkedinProfile())).append(",")
               .append(escapeCsv(user.getGithubProfile()))
               .append("\n");
        }

        byte[] csvBytes = csv.toString().getBytes(StandardCharsets.UTF_8);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType("text/csv"));
        headers.set(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=users.csv"
        );

        return ResponseEntity.ok()
                .headers(headers)
                .body(csvBytes);
    }
    @GetMapping("/api/users/export/excel")
public ResponseEntity<byte[]> exportUsersAsExcel() throws Exception {

    List<User> users = userRepository.findAll();

    try (XSSFWorkbook workbook = new XSSFWorkbook();
         ByteArrayOutputStream outputStream = new ByteArrayOutputStream()) {

        Sheet sheet = workbook.createSheet("Users");

        // Header row
        Row headerRow = sheet.createRow(0);

        String[] headers = {
                "ID",
                "Name",
                "DOB",
                "Gender",
                "Blood Group",
                "School Name",
                "10th Percentage",
                "12th Percentage",
                "College Name",
                "Department/Degree",
                "CGPA",
                "Graduation Year",
                "Highest Qualification",
                "Current City",
                "Email",
                "Mobile",
                "Address",
                "State",
                "Pincode",
                "Current Status",
                "Job Title",
                "Company Name",
                "Years of Experience",
                "LinkedIn Profile",
                "Github Profile"
        };

        for (int i = 0; i < headers.length; i++) {
            headerRow.createCell(i).setCellValue(headers[i]);
        }

        // Data rows
        int rowNumber = 1;

        for (User user : users) {

            Row row = sheet.createRow(rowNumber++);

            row.createCell(0).setCellValue(
                    user.getId() != null ? user.getId() : 0
            );
            row.createCell(1).setCellValue(
                    user.getName() != null ? user.getName() : ""
            );
            row.createCell(2).setCellValue(
                    user.getDob() != null ? user.getDob() : ""
            );
            row.createCell(3).setCellValue(
                    user.getGender() != null ? user.getGender() : ""
            );
            row.createCell(4).setCellValue(
                    user.getBloodGroup() != null ? user.getBloodGroup() : ""
            );
            row.createCell(5).setCellValue(
                    user.getSchoolName() != null ? user.getSchoolName() : ""
            );
            row.createCell(6).setCellValue(user.getTenthPercentage());
            row.createCell(7).setCellValue(user.getTwelfthPercentage());
            row.createCell(8).setCellValue(
                    user.getCollegeName() != null ? user.getCollegeName() : ""
            );
            row.createCell(9).setCellValue(
                    user.getDepartmentOrDegree() != null
                            ? user.getDepartmentOrDegree()
                            : ""
            );
            row.createCell(10).setCellValue(user.getCgpa());
            row.createCell(11).setCellValue(user.getGraduationYear());
            row.createCell(12).setCellValue(
                    user.getHighestQualification() != null
                            ? user.getHighestQualification()
                            : ""
            );
            row.createCell(13).setCellValue(
                    user.getCurrentCity() != null ? user.getCurrentCity() : ""
            );
            row.createCell(14).setCellValue(
                    user.getEmail() != null ? user.getEmail() : ""
            );
            row.createCell(15).setCellValue(
                    user.getMobile() != null ? user.getMobile() : ""
            );
            row.createCell(16).setCellValue(
                    user.getAddress() != null ? user.getAddress() : ""
            );
            row.createCell(17).setCellValue(
                    user.getState() != null ? user.getState() : ""
            );
            row.createCell(18).setCellValue(
                    user.getPincode() != null ? user.getPincode() : ""
            );
            row.createCell(19).setCellValue(
                    user.getCurrentStatus() != null
                            ? user.getCurrentStatus()
                            : ""
            );
            row.createCell(20).setCellValue(
                    user.getJobTitle() != null ? user.getJobTitle() : ""
            );
            row.createCell(21).setCellValue(
                    user.getCompanyName() != null ? user.getCompanyName() : ""
            );
            row.createCell(22).setCellValue(user.getYearsOfExperience());
            row.createCell(23).setCellValue(
                    user.getLinkedinProfile() != null
                            ? user.getLinkedinProfile()
                            : ""
            );
            row.createCell(24).setCellValue(
                    user.getGithubProfile() != null
                            ? user.getGithubProfile()
                            : ""
            );
        }

        // Adjust column widths
        for (int i = 0; i < headers.length; i++) {
            sheet.autoSizeColumn(i);
        }

        workbook.write(outputStream);

        byte[] excelBytes = outputStream.toByteArray();

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(
                MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                )
        );
        responseHeaders.set(
                HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=users.xlsx"
        );

        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body(excelBytes);
    }
}

    private String escapeCsv(Object value) {

        if (value == null) {
            return "";
        }

        String text = value.toString();

        if (text.contains(",") || text.contains("\"") || text.contains("\n")) {
            text = text.replace("\"", "\"\"");
            return "\"" + text + "\"";
        }

        return text;
    }
}