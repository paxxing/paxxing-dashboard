import { Component } from '@angular/core';
import { AwsService } from '../core/services/aws/aws.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-upload-page',
  imports: [],
  templateUrl: './upload-page.component.html',
  styleUrl: './upload-page.component.css',
})
export class UploadPageComponent {
  constructor(private awsService: AwsService) {}

  async handleChange(e: Event) {
    const target = e.target as HTMLInputElement;

    if (!target.files || target.files.length === 0) {
      return;
    }

    const file = target.files[0];

    try {
      const res = await this.awsService.putObjectInS3(file, uuidv4());
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }
}
