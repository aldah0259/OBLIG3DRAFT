package com.example.demo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.jdbc.JdbcTemplateAutoConfiguration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class KundeRepository {
    @Autowired
    private JdbcTemplate dp;
    public void lagreAlleKunder(Kunde innKunde){
        String sql = "INSERT INTO Kunde (film, antall, fornavn, etternavn, tlf, epost) VALUES(?;?;?;?;?;?)";
        db.update(sql, innKunde.getFilm(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn(),
                innKunde.getTlf(), innKunde.getEpost());
    }


}

// DATABASE TABLE
// id INTEGER
// film VARCHAR
// antall INTEGER
// fornavn VARCHAR
// etternavn VARCHAR
// tlf INTEGER
//epost VARCHAR
//PRIMARY KEY (ID)