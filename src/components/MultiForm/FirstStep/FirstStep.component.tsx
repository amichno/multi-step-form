import React from 'react';
import ControlledInput from '../../../shared/utils/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string(),
});

export default function FirstStep() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  return (
    <div>
      <input
        {...register('name', {
          required: 'Bład',
          validate: (value) => value === 'test' || 'inne niż test',
        })}
      />
      <ControlledInput></ControlledInput>
    </div>
  );
}
