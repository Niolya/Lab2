import { Module } from "@nestjs/common";
import { DoctorsModule } from "./doctors/doctors.module";
import { PatientsModule } from "./patients/patients.module";
import { ClinicsModule } from "./clinics/clinics.module";
import { DatasourceModule } from "./datasource/datasource.module";

@Module({
  imports: [DoctorsModule, PatientsModule, ClinicsModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
