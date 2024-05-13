import { HttpStatus, Injectable } from "@nestjs/common";
import { Clinic } from "src/clinics/clinic.entity";
import { DatasourceService } from "src/datasource/datasource.service";

@Injectable()
export class ClinicsService {
    constructor(private readonly datasourceService: DatasourceService) {}

    // CRUD
    // create
    create(clinic: Clinic) {
        this.datasourceService.getClinics().push(clinic);
        return clinic;
    }
    
    // read
    findOne(id: number) {
    return this.datasourceService
        .getClinics()
        .find((clinic) => clinic.id === id);
    }
    
    // read (all)
    findAll(): Clinic[] {
        return this.datasourceService.getClinics();
    }

    // update
    update(id: number, updatedClinic: Clinic) {
        const index = this.datasourceService
            .getClinics()
            .findIndex((clinic) => clinic.id === id);
        this.datasourceService.getClinics()[index] = updatedClinic;
        return this.datasourceService.getClinics()[index];
    }

    // delete
    remove(id: number) {
        const index = this.datasourceService
            .getClinics()
            .findIndex((clinic) => clinic.id === id);
        this.datasourceService.getClinics().splice(index, 1);
        return HttpStatus.OK;
    }
}