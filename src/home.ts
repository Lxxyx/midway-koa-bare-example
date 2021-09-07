import { Controller, Get, Provide, Inject } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

@Provide()
@Controller('/')
export class HomeController {
  @Inject()
  ctx: Context;

  @Get('/')
  async home() {
    return {
      message: 'Hello Midway.js',
      path: this.ctx.path
    };
  }
}
