package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class KundeController {
@Autowired
        private KundeRepository rep;
@PostMapping("/lagreAlle")
        public void lagreAlle(Kunde innkunde) {rep.lagreAlleKunder(innkunde);
}
@GetMapping("/hentAlle")
public List<Kunde> hentAlle(){return rep.hentAlleKunder(); }
@GetMapping("/slettAlle")
public void slettAlle(){rep.slettAlleKunder(); }
}


