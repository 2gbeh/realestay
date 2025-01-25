import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
//
import { StringHelper as _ } from '@/shared/helpers';

export async function userSeeder(prisma: PrismaClient) {
  try {
    const hashedPassword = await hash('secret', 10);
    const res = await prisma.user.upsert({
      where: { username: '2gbeh' },
      update: {},
      create: {
        avatar: 'https://github.com/2gbeh.png',
        username: '2gbeh',
        email: 'dehphantom@yahoo.com',
        password: hashedPassword,
        otp: 12345,
        verifiedAt: _.getDateTime(),
        preference: {
          create: {
            darkMode: true,
            prototypeMode: true,
          },
        },
      },
    });
    //
    console.log('🚀 ~ userSeeder ~ res:', res);
    return res;
  } catch (err) {
    console.error('🚀 ~ userSeeder ~ err:', err);
  }
}
