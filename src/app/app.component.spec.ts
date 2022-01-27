import { Location } from '@angular/common';
import { fakeAsync, flush, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

let router: Router
let location: Location
describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes)
            ],
            declarations: [
                AppComponent, WelcomeComponent, AboutUsComponent
            ],
        }).compileComponents();
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        router.initialNavigation();
    });
    //testing routing /welcome should navigate to WelcomeComponent
    it('navigate to /welcome takes you to /welcome', fakeAsync(() => {
        router.navigate(["/welcome"]).then(() => {
            expect(location.path()).toBe("/welcome")
        });
        flush();
    }));
    //testing routing /aboutus should navigate to WelcomeComponent
    it('navigate to /aboutus takes you to /aboutus', fakeAsync(() => {
        router.navigate(["/aboutus"]).then(() => {
            expect(location.path()).toBe("/aboutus")
        });
        flush();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

});
