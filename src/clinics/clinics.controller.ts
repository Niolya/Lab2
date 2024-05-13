import { ClinicsService } from "src/clinics/clinics.service";
import { Body, Controller, Get, Put, Param, Post, Delete} from "@nestjs/common";
import { Clinic } from "src/clinics/clinic.entity";


@Controller("clinics")
export class ClinicsController {
    constructor(private readonly clinicsService: ClinicsService) {}

    // получение всех
    @Get()
    findAll() {
        return this.clinicsService.findAll();
    }

    // получение конкретного по id
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.clinicsService.findOne(+id);
    }

    // обновляет конкретного по id и возвращает
    @Put(":id")
    update(@Param("id") id: string, @Body() updateClinic: Clinic) {
        return this.clinicsService.update(+id, updateClinic);
    }

    // добавляет нового
    @Post()
    create(@Body() createClinic: Clinic) {
        return this.clinicsService.create(createClinic);
    }

    // удаляет конкретного по id
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.clinicsService.remove(+id);
    }
}
