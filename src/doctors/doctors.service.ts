import { HttpStatus, Injectable } from "@nestjs/common";
import { Doctor } from "src/doctors/doctor.entity";
import { DatasourceService } from "src/datasource/datasource.service";

@Injectable()
export class DoctorsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    // CRUD
    // create
    create(doctor: Doctor) {
        this.datasourceService.getDoctors().push(doctor);
        return doctor;
    }
    
    // read
    findOne(id: number) {
    return this.datasourceService
        .getDoctors()
        .find((doctor) => doctor.id === id);
    }

    // read (all)
    findAll(): Doctor[] {
        return this.datasourceService.getDoctors();
    }
    
    // update
    update(id: number, updatedDoctor: Doctor) {
        const index = this.datasourceService
            .getDoctors()
            .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors()[index] = updatedDoctor;
        return this.datasourceService.getDoctors()[index];
    }

    // delete
    remove(id: number) {
        const index = this.datasourceService
            .getDoctors()
            .findIndex((doctor) => doctor.id === id);
        this.datasourceService.getDoctors().splice(index, 1);
        return HttpStatus.OK;
    }
}