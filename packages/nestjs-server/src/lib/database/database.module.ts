import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseProviders, DB_CONFIG_OPTIONS } from './database.providers';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => {
      return DB_CONFIG_OPTIONS
    },
  })],
  providers: DatabaseProviders,
  exports: DatabaseProviders,
})
export class DatabaseModule { }
