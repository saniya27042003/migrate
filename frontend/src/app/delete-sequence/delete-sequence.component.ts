import { Component, OnInit } from '@angular/core';
import { MigrationService } from '../services/migration.service';

@Component({
  selector: 'app-delete-sequence',
  templateUrl: './delete-sequence.component.html',
  styleUrls: ['./delete-sequence.component.css']
})
export class DeleteSequenceComponent implements OnInit {

  selectedFile: File | null = null;

  isLoading = false;

  feedbackMessage = '';

  constructor(
    private service: MigrationService
  ) { }

  ngOnInit(): void {
  }

  private validateAndSetFile(file: File): void {

    const fileName = file.name.toLowerCase();

    if (
      fileName.endsWith('.csv') ||
      fileName.endsWith('.xlsx')
    ) {

      this.selectedFile = file;
      this.feedbackMessage = '';

    } else {

      this.selectedFile = null;

      this.feedbackMessage =
        'Only .csv and .xlsx files are allowed.';
    }
  }

  onFileSelected(event: any): void {

    if (
      event.target.files &&
      event.target.files.length > 0
    ) {

      this.validateAndSetFile(
        event.target.files[0]
      );

    }

  }


  onDragOver(event: DragEvent): void {

    event.preventDefault();

  }

  onFileDropped(event: DragEvent): void {

    event.preventDefault();

    if (
      event.dataTransfer?.files &&
      event.dataTransfer.files.length > 0
    ) {

      this.validateAndSetFile(
        event.dataTransfer.files[0]
      );

    }

  }

  removeFile(): void {

    this.selectedFile = null;

  }

  executeDeleteSequence(): void {

    if (!this.selectedFile) {

      this.feedbackMessage = 'Please select a file first';
      return;

    }

    const formData = new FormData();

    formData.append(
      'file',
      this.selectedFile
    );

    this.isLoading = true;

    this.service.executeDeleteSequence(formData)
      .subscribe({

        next: (res: any) => {

          this.isLoading = false;

          this.feedbackMessage =
            res?.message || 'Delete Sequence Executed Successfully';

        },

        error: (err) => {

          this.isLoading = false;

          this.feedbackMessage =
            err?.error?.message || 'Delete Sequence Failed';

        }

      });

  }

}