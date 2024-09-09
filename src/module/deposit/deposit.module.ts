import { Module } from '@nestjs/common';
import { DepositService } from './deposit.service';
import { DepositController } from './deposit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Deposit, DepositSchema } from './deposit.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Deposit.name, schema: DepositSchema }]),
  ],
  controllers: [DepositController],
  providers: [DepositService],
})
export class DepositModule {}
