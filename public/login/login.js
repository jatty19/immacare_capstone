// const form = document.getElementById("login-form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const email = form.email.value;
//   const password = form.password.value;
//   document
//     .getElementById("login-form")
//     .addEventListener("submit", async function (e) {
//       e.preventDefault(); // prevent default form submission

//       const email = document.querySelector('input[name="email"]').value;
//       const password = document.querySelector('input[name="password"]').value;

//       try {
//         const res = await fetch("/login", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email: email, password: password }),
//         });

//         const data = await res.json();

//         if (res.ok) {
//           // alert("Login successful!");
//           window.location.href = "/header_menu/header_menu.html";
//         } else {
//           alert(data.message || "Login failed");
//         }
//       } catch (error) {
//         console.error("Login error:", error);
//         alert("Something went wrong");
//       }
//     });

//   try {
//     const response = await fetch("http://localhost:3000/login", {
//       // Make sure port matches your backend
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email, password: password }), // send as email, password to match backend
//     });

//     const data = await response.json();

//     if (response.ok) {
//     } else {
//       alert(data.message); // e.g., "Invalid credentials"
//     }
//   } catch (error) {
//     alert("Error connecting to server");
//     console.error(error);
//   }
// });
// //mata
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("✅ login.js is loaded!");

//   const togglePassword = document.querySelector("#togglePassword");
//   const password = document.querySelector("#password");

//   console.log("togglePassword:", togglePassword);
//   console.log("password:", password);

//   if (togglePassword && password) {
//     togglePassword.addEventListener("click", function () {
//       const type =
//         password.getAttribute("type") === "password" ? "text" : "password";
//       password.setAttribute("type", type);

//       // Change icon
//       this.innerHTML =
//         type === "password"
//           ? '<i class="bi bi-eye"></i>'
//           : '<i class="bi bi-eye-slash"></i>';
//     });
//   } else {
//     console.error(" Element(s) not found. Check your IDs!");
//   }
// });




//jat
// const form = document.getElementById("login-form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const email = document.querySelector('input[name="email"]').value;
//   const password = document.querySelector('input[name="password"]').value;

//   try {
//     // Use relative URL - it will work both locally and on production
//     const response = await fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: email, password: password }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       // alert("Login successful!");
//       window.location.href = "/dashboard/dashboard.html"; // or your correct dashboard path
//     } else {
//       alert(data.message || "Login failed");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//     alert("Error connecting to server");
//   }
// });

// // Password toggle
// document.addEventListener("DOMContentLoaded", function () {
//   console.log("✅ login.js is loaded!");

//   const togglePassword = document.querySelector("#togglePassword");
//   const password = document.querySelector("#password");

//   console.log("togglePassword:", togglePassword);
//   console.log("password:", password);

//   if (togglePassword && password) {
//     togglePassword.addEventListener("click", function () {
//       const type =
//         password.getAttribute("type") === "password" ? "text" : "password";
//       password.setAttribute("type", type);

//       // Change icon
//       this.innerHTML =
//         type === "password"
//           ? '<i class="bi bi-eye"></i>'
//           : '<i class="bi bi-eye-slash"></i>';
//     });
//   } else {
//     console.error("❌ Element(s) not found. Check your IDs!");
//   }
// });



const form = document.getElementById("login-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();

    if (response.ok) {
      const role = data.user.role;
      
      // Redirect based on role
      if (role === 'admin' || role === 'staff') {
        window.location.href = "/dashboard/dashboard.html";
      } else if (role === 'doctor') {
        window.location.href = "/doctor/doctor.html";
      } else if (role === 'patient') {
        window.location.href = "/appointment_booking/appointment_booking.html";
      } else {
        window.location.href = "/homepage/homepage.html";
      }
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    alert("Error connecting to server");
  }
});

// Password toggle
document.addEventListener("DOMContentLoaded", function () {
  const togglePassword = document.querySelector("#togglePassword");
  const password = document.querySelector("#password");

  if (togglePassword && password) {
    togglePassword.addEventListener("click", function () {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);

      this.innerHTML =
        type === "password"
          ? '<i class="bi bi-eye"></i>'
          : '<i class="bi bi-eye-slash"></i>';
    });
  }
});