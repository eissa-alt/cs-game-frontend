import { MemberType } from './members';

export interface TeamType {
   id: string;
   name: string;
   members: MemberType[];
}
