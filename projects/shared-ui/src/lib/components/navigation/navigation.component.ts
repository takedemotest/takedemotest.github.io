import { CommonModule } from "@angular/common";
import { Component, computed, inject, input} from "@angular/core";
import { NavigationService } from "./navigation.service";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MenuType, NavItem } from "../../models/navigation-model";

@Component({
    selector:'navigation-menu',
    standalone:true,
    imports: [CommonModule, MatIconModule,RouterModule],
    templateUrl:'navigation.component.html',
    styleUrl:'navigation.component.scss'
})

export class NavigationComponent{
    private navService = inject(NavigationService)

    public layoutKey = input.required<MenuType>();
    
    public menuData = computed(()=>{
        return this.navService.activeMenuLayout()[this.layoutKey()] || [];
    })

    onItemClick(item:NavItem):void{
        if(item.action){
            this.navService.emitAction(item);
        }
    }
}