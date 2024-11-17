import { type Module } from "./types";
import { AccountManagementModule } from "./account-management";
import { CoffeeShopDiscoveryModule } from "./coffee-shop-discovery";
import { CoffeeShopInformationModule } from "./coffee-shop-information";

export const modules: Module[] = [
  AccountManagementModule,
  CoffeeShopDiscoveryModule,
  CoffeeShopInformationModule,
];
