import { ValidateResult } from 'react-hook-form';
import Axios from '~/utils/axios';

const isUniqueAttribute = async (type: any, value: any, setIdUnique?: (val: boolean) => void) => {
   try {
      await Axios.post('/guests/check-unique', {
         type,
         value,
      });
      setIdUnique?.(true);
      return new Promise<ValidateResult>(resolve => resolve(true));
   } catch (e) {
      setIdUnique?.(false);
      return new Promise<ValidateResult>(resolve => resolve(false));
   }
};

export default isUniqueAttribute;
