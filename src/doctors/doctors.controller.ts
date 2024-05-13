import { DoctorsService } from "src/doctors/doctors.service";
import { Body, Controller, Get, Put, Param, Post, Delete} from "@nestjs/common";
import { Doctor } from "src/doctors/doctor.entity";


@Controller("doctors")
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    // получение всех
    @Get()
    findAll() {
        return this.doctorsService.findAll();
    }

    // получение конкретного по id
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.doctorsService.findOne(+id);
    }

    // обновляет конкретного по id и возвращает
    @Put(":id")
    update(@Param("id") id: string, @Body() updateDoctor: Doctor) {
        return this.doctorsService.update(+id, updateDoctor);
    }

    // добавляет нового
    @Post()
    create(@Body() createDoctor: Doctor) {
        return this.doctorsService.create(createDoctor);
    }

    // удаляет конкретного по id
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.doctorsService.remove(+id);
    }
}
