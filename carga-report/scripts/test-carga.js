import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 500, // 500 usuários simultâneos
  duration: '5m', // por 5 minutos
};

export default function () {
  const res = http.get('https://serverest.dev/usuarios');

  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  sleep(1); // simula tempo de uso entre requisições
}