package ues21.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT)
public class FunctionalException extends Exception {
    
    public FunctionalException(String message) {
        super(message);
    }
}
