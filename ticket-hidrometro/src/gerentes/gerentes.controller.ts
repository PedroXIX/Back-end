import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { GerentesService } from './gerentes.service';
import { CreateGerenteDto } from './dto/create-gerente.dto';
import { UpdateGerenteDto } from './dto/update-gerente.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('gerentes')
export class GerentesController {
  constructor(private readonly gerentesService: GerentesService) {}

  @Post()
  create(@Body() createGerenteDto: CreateGerenteDto) {
    return this.gerentesService.create(createGerenteDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.gerentesService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.gerentesService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateGerenteDto: UpdateGerenteDto) {
    return this.gerentesService.update(+id, updateGerenteDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.gerentesService.remove(+id);
  }
}
