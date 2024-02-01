package com.formation.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController

public class FileUploadController {

    @PostMapping("/api/upload")
    public String handleFileUpload(@RequestParam("image") MultipartFile file) {
        // Implement the logic to save the file to your desired location
        // You can access the file using `file.getInputStream()`
        // Return the URL or any response as needed
        return "File uploaded successfully!";
    }
}

