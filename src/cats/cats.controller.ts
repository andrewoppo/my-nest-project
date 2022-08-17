import { Controller, Get, Body, Post, Req, Param, Delete, Query } from '@nestjs/common';
import { CreateCatDto } from './dto';

@Controller('cats')
export class CatsController {
    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat':
    }
   
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}
