// .storybook/preview.ts
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

import { moduleMetadata } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export const decorators = [
  moduleMetadata({
    imports: [MatButtonModule, MatIconModule],
  }),
];