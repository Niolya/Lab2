import { HttpStatus, Injectable } from "@nestjs/common";
import { Patient } from "src/patients/patient.entity";
import { DatasourceService } from "src/datasource/datasource.service";

@Injectable()
export class PatientsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    // CRUD
    // create
    create(patient: Patient) {
        this.datasourceService.getPatients().push(patient);
        return patient;
    }
    
    // read
    findOne(id: number) {
    return this.datasourceService
        .getPatients()
        .find((patient) => patient.id === id);
    }
    
    // read (by room)
    findByRoom(room: number) {
    return this.datasourceService
        .getPatients()
        .filter((patient) => patient.room === room);
    }

    // read (all)
    findAll(): Patient[] {
        return this.datasourceService.getPatients();
    }

    // update
    update(id: number, updatedPatient: Patient) {
        const index = this.datasourceService
            .getPatients()
            .findIndex((patient) => patient.id === id);
        this.datasourceService.getPatients()[index] = updatedPatient;
        return this.datasourceService.getPatients()[index];
    }

    // delete
    remove(id: number) {
        const index = this.datasourceService
            .getPatients()
            .findIndex((patient) => patient.id === id);
        this.datasourceService.getPatients().splice(index, 1);
        return HttpStatus.OK;
    }
}