import { PatientsService } from "src/patients/patients.service";
import { Body, Controller, Get, Put, Param, Post, Delete} from "@nestjs/common";
import { Patient } from "src/patients/patient.entity";


@Controller("patients")
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    // получение всех
    @Get()
    findAll() {
        return this.patientsService.findAll();
    }

    // получение конкретного по id
    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.patientsService.findOne(+id);
    }

    // получение некоторых по номеру палаты
    @Get(":room")
    findByRoom(@Param("room") room: string) {
        return this.patientsService.findByRoom(+room);
    }

    // обновляет конкретного по id и возвращает
    @Put(":id")
    update(@Param("id") id: string, @Body() updatePatient: Patient) {
        return this.patientsService.update(+id, updatePatient);
    }

    // добавляет нового
    @Post()
    create(@Body() createPatient: Patient) {
        return this.patientsService.create(createPatient);
    }

    // удаляет конкретного по id
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.patientsService.remove(+id);
    }
}
