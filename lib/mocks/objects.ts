import * as types from '../types';

export const company: types.Company = {
  id: '2',
  name: 'USWNT',
};

export const companySearchResult: types.CompanySearchResult = {
  ...company,
  domain: 'https://www.ussoccer.com',
};

export const target: types.Target = {
  first_name: 'Megan',
  last_name: 'Rapinoe',
  social_security_number: '***-**-1234',
  company: company,
};

export const document: types.Document = {
  filename: 'hello.pdf',
  content: 'aGVsbG8gd29ybGQ=',
};

export const address: types.Address = {
  line_one: 'U.S. Soccer Federation',
  line_two: '1801 S. Prairie Ave.',
  city: 'Chicago',
  state: 'IL',
  country: 'USA',
  postal_code: '60616',
};

export const employer: types.Employer = {
  name: 'USWNT',
  address,
};

export const position: types.Position = {
  title: 'Midfielder',
  start_date: '2006-01-01',
};

export const price: types.Price = {
  amount: '34.95',
  currency: 'USD',
};

export const salary: types.Salary = {
  gross_pay: '123456.00',
  pay_frequency: 'annually',
  hours_per_week: '40',
};

export const earning: types.Earnings = {
  year: '2020',
  base: '100000.00',
  bonus: '100000.00',
  commission: '100000.00',
  overtime: '100000.00',
  other: '100000.00',
  total: '500000.00',
};

export const employee: types.Employee = {
  first_name: 'Megan',
  last_name: 'Rapinoe',
  address,
  status: types.EMPLOYEE_STATUSES.ACTIVE,
  social_security_number: '***-**-1234',
  positions: [position],
  earnings: [earning],
  salary,
};

export const turnaroundTime: types.TurnaroundTime = {
  upper_bound: '24',
  lower_bound: '2',
};

export const verification: types.Verification = {
  id: 'AAAAAAAAAOoAAaDBFruDgadDkwPP0yVjCGf5rWapD3rzwqq5fZT6sqri',
  state: types.VERIFICATION_STATES.PENDING_APPROVAL,
  price,
  turnaround_time: turnaroundTime,
  created: '2020-08-11T15:14:51.444036Z',
  target: target,
  permissible_purpose: types.PERMISSIBLE_PURPOSES.EMPLOYMENT,
  type: types.VERIFICATION_TYPES.VOE,
  documents: [document],
  additional_information: 'Notes about the verification',
};

export const cancelledVerification: types.Verification = {
  id: 'AAAAAAAAAOoAAaDBFruDgadDkwPP0yVjCGf5rWapD3rzwqq5fZT6sqri',
  state: types.VERIFICATION_STATES.CANCELED,
  price,
  turnaround_time: turnaroundTime,
  created: '2020-08-11T15:14:51.444036Z',
  target: target,
  permissible_purpose: types.PERMISSIBLE_PURPOSES.EMPLOYMENT,
  type: types.VERIFICATION_TYPES.VOE,
  documents: [document],
  additional_information: 'Notes about the verification',
  cancellation_reason: types.CANCELLATION_REASONS.OTHER,
  cancellation_details: 'Cancellation in more detail',
};

export const report: types.ResponseReportGet = {
  created: '2020-08-11T15:14:51.444036Z',
  current_as_of: new Date().toString(),
  verification_request: {
    type: types.VERIFICATION_TYPES.VOE,
    created: new Date().toString(),
    id: 'AAAAAAAAAOoAAaDBFruDgadDkwPP0yVjCGf5rWapD3rzwqq5fZT6sqri',
  },
  employer: employer,
  employee: employee,
};
