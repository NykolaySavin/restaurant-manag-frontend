import * as yup from 'yup';
import { setConfig } from 'next/config';

export const clientConfig = Object.freeze({
  roq: {
    url: yup.string().trim().validateSync('http://localhost:3000'),
    platformURL: yup
      .string()
      .trim()
      .required('NEXT_PUBLIC_ROQ_PLATFORM_URL is a required variable')
      .validateSync(process.env.NEXT_PUBLIC_ROQ_PLATFORM_URL),
    consoleServiceURL: yup.string().trim().optional().validateSync(process.env.NEXT_PUBLIC_ROQ_CONSOLE_SERVICE_URL),
  },
  url: yup.string().trim().validateSync('http://localhost:3001'),
  defaultTheme: yup.string().trim().default('light').validateSync(process.env.NEXT_PUBLIC_THEME),
});

setConfig({ clientConfig });
