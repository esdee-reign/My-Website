document.querySelectorAll(".copyLink").forEach((el) =>
        el.addEventListener("click", async (event) => {
          await navigator.clipboard.writeText(event.target.dataset.link);
          alert("Link Copied ;)");
        }),
      );