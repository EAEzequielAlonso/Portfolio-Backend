import { Module } from '@nestjs/common';
import { ProfileModule } from './modules/profile/profile.module';
import { ResumeModule } from './modules/resume/resume.module';
import { ActivityModule } from './modules/activity/activity.module';
import { SoftskillModule } from './modules/softskill/softskill.module';
import { EducationModule } from './modules/education/education.module';
import { LenguageModule } from './modules/lenguage/lenguage.module';
import { MessageModule } from './modules/message/message.module';
import { BlogModule } from './modules/blog/blog.module';
import { ProjectModule } from './modules/project/project.module';
import { SkillModule } from './modules/skill/skill.module';
import { ExperienceModule } from './modules/experience/experience.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('typeorm'),
    }),
    ProfileModule, ResumeModule, ActivityModule, SoftskillModule, EducationModule, LenguageModule, MessageModule, BlogModule, ProjectModule, SkillModule, ExperienceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
