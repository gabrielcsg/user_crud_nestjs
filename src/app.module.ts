import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // adicione aqui a uri do mongodb.
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
