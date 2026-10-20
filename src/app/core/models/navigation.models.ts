import { NavItem } from './site.models';

export interface NavConfigItem {
  id: string;
  label: string;
  /** Shorter label for the desktop menu bar when space is tight */
  shortLabel?: string;
  path?: string;
  visible: boolean;
  defaultVisible: boolean;
  children?: NavConfigItem[];
}

export type NavItemTree = NavItem;
