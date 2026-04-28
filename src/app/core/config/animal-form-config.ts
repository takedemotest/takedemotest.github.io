import { FormFieldConfig } from "../../../../projects/shared-ui/src/lib/models/form-field-model";

export const ANIMAL_CONFIG: FormFieldConfig[] = [
  { name: 'name', label: 'Name', placeholder: 'Name', type: 'text', required: true },
  { name: 'age', label: 'Age', placeholder: 'Age', type: 'number', required: true },
  {
    name: 'Type',
    label: 'Type',
    type: 'select',
    required: true,
    options: [
      { label: 'Cow', value: 'cow' },
      { label: 'Baffalo', value: 'baffalo' },
      { label: 'Goat', value: 'goat' },
      { label: 'Sheep', value: 'sheep' }
    ]
  },
  { name: 'Milk', label: 'Milk Production', placeholder: 'Milk Production', type: 'number', required: true },
  {
    name: 'Health Status',
    label: 'Health Status',
    type: 'select',
    options: [
      { label: 'Healthy', value: 'Healthy' },
      { label: 'Sick', value: 'Sick' },
      { label: 'Under Treatment', value: 'Under Treatment' }
    ]
  }
]
