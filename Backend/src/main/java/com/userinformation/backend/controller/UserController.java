package com.userinformation.backend.controller;

import com.userinformation.backend.model.User;
import com.userinformation.backend.repository.UserRepository;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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