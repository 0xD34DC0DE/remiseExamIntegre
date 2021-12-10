package com.lacouf.al420565final.controller;


import com.lacouf.al420565final.model.Client;
import com.lacouf.al420565final.util.ClientFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping("/clients")
public class ClientController {

    @GetMapping("/all")
    public List<Client> getAllClients() {
        return ClientFactory.getClients();
    }

    @GetMapping("/gender/{gender}")
    public List<Client> getAllClientsByGender(@PathVariable("gender") String gender) {
        return ClientFactory.getClients().stream()
                .filter(client -> client.getGender().equals(gender))
                .collect(Collectors.toList());
    }

    @GetMapping("/city/{city}")
    public List<Client> getAllClientsByCity(@PathVariable("city") String city) {
        return ClientFactory.getClients().stream()
                .filter(client -> client.getCity().equals(city))
                .collect(Collectors.toList());
    }

}
