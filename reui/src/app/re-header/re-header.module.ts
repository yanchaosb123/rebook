import { NgModule } from '@angular/core';
import { ReHeaderComponent } from './re-header.component';
import { MenuWidgetsModule } from 'portalface/widgets/menu-widgets';
import { TabMenu } from 'portalface/widgets/menu-widgets/tabmenu/tabmenu';
import { ReHeaderService } from './re-header.service';

@NgModule({
    declarations: [
        ReHeaderComponent
    ],
    imports: [
        MenuWidgetsModule
    ],
    exports: [
        ReHeaderComponent
    ],
    providers: [ReHeaderService]
})
export class ReHeaderModule { }
