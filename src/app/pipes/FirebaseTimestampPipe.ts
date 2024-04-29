import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firebaseTimestamp',
  standalone: true
})
export class FirebaseTimestampPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) return null;

    // Check if the value is a Firebase Timestamp
    if (value.toDate) {
      // Convert to JavaScript Date object
      return value.toDate();
    } else {
      // Return as is if conversion isn't possible
      return value;
    }
  }
}
