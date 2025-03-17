import { Injectable } from '@angular/core';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AwsService {
  private s3Client: S3Client | null = null;

  constructor() {
    this.s3Client = new S3Client({
      region: environment.region,
      credentials: fromCognitoIdentityPool({
        clientConfig: { region: 'ap-northeast-2' },
        identityPoolId: environment.identityPoolId,
      }),
    });
  }

  async putObjectInS3(
    file: File,
    key: string,
    contentType?: string,
  ): Promise<any> {
    if (!this.s3Client) {
      console.error('Not exist S3 client.');
      return;
    }
    try {
      const command = new PutObjectCommand({
        Bucket: environment.s3Bucket,
        Key: key,
        Body: file,
        ContentType: contentType || file.type,
      });
      const response = await this.s3Client.send(command);
      console.log('Upload success:', response);
      return response;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }
}
