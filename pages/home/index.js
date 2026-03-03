const menuItems = document.querySelectorAll('.menu-item');
const screens = document.querySelectorAll('.content-screen');
const usersTableBody = document.getElementById('users-table-body');

function showScreen(screenName) {
  menuItems.forEach((item) => {
    item.classList.toggle('is-active', item.dataset.screen === screenName);
  });

  screens.forEach((screen) => {
    screen.classList.toggle('is-visible', screen.dataset.screen === screenName);
  });
}

function renderUsuarios(usuarios) {
  if (!usersTableBody) return;

  if (!Array.isArray(usuarios) || usuarios.length === 0) {
    usersTableBody.innerHTML = `
      <tr>
        <td colspan="5">Nenhum usuario encontrado.</td>
      </tr>
    `;
    return;
  }

  usersTableBody.innerHTML = usuarios
    .map((usuario) => {
      const nome = usuario.nome || 'Sem nome';
      const email = usuario.email || 'Sem email';
      const role = usuario.admin_id ? 'Admin' : 'Usuario';

      return `
        <tr>
          <td>${nome}</td>
          <td>${email}</td>
          <td><span class="pill ${role === 'Admin' ? 'role-admin' : 'role-user'}">${role}</span></td>
          <td><span class="pill status-ok">Ativo</span></td>
          <td class="dots">...</td>
        </tr>
      `;
    })
    .join('');
}

async function loadUsuarios() {
  try {
    const response = await fetch('/usuarios', {
      method: 'GET',
      credentials: 'include'
    });

    if (!response.ok) return;

    const usuarios = await response.json();
    renderUsuarios(usuarios);
  } catch (_error) {
    // Keep the UI usable even if the request fails.
  }
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    showScreen(item.dataset.screen);
  });
});

loadUsuarios();
