import { Module } from "@nestjs/common";
import { PatientsService } from "./patients.service";
import { PatientsController } from "./patients.controller";
import { DatasourceModule } from "src/datasource/datasource.module";

@Module({
  controllers: [PatientsController],
  providers: [PatientsService],
  imports: [DatasourceModule],
})
export class PatientsModule {}
