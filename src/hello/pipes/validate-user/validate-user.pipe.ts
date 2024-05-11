import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const agenumber = parseInt(value.age.toString(),10);
    if(isNaN(agenumber)){
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }
    return {...value, age:agenumber};
  }
}
