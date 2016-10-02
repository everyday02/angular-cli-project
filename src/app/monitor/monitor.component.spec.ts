/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('Hero: CliProject', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeroComponent
            ],
        });
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(HeroComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`英雄的标题包含"英雄"'`, async(() => {
        let fixture = TestBed.createComponent(HeroComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.title).toContain('英雄');
    }));

    it(`英雄个数是4`, async(() => {
        let fixture = TestBed.createComponent(HeroComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app.heroes.length).toEqual(4);
    }));

});
