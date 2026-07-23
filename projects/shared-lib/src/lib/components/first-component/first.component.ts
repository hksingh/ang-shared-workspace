import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'lib-shared-first',
    imports: [],
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss',
})
export class FirstComponent implements AfterViewInit { 
    @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;
    @ViewChild('secondInput') secondInput!: ElementRef<HTMLInputElement>;

    ngAfterViewInit(): void {
       
    }

    SetFocus(){
        this.myInput.nativeElement.focus();
        this.myInput.nativeElement.className = "someclass";
    }

    SetBackground(){
        this.secondInput.nativeElement.style.background = "red";
        this.myInput.nativeElement.value = "Hello Angular!";
    }
}