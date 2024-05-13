import { Module } from "@nestjs/common";
import { DoctorsService } from "./doctors.service";
import { DoctorsController } from "./doctors.controller";
import { DatasourceModule } from "src/datasource/datasource.module";

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService],
  imports: [DatasourceModule],
})
export class DoctorsModule {}
