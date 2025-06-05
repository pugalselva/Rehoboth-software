<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Join Us Modal Popup</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
    <style>
        body {
            background-color: #f0f4f8;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .btn-join {
            background: linear-gradient(135deg, #6FD6FF, #42a5f5);
            color: white;
            border: none;
            font-weight: 600;
            font-size: 1.2rem;
            border-radius: 0.5rem;
            padding: 0.6rem 1.6rem;
            box-shadow: 0 8px 15px rgba(111, 214, 255, 0.3);
            transition: all 0.3s ease;
        }
        .btn-join:hover, .btn-join:focus {
            background: linear-gradient(135deg, #42a5f5, #1e88e5);
            color: white;
            box-shadow: 0 12px 20px rgba(66, 165, 245, 0.5);
            outline: none;
        }
        .modal-header {
            background: linear-gradient(135deg, #6FD6FF, #42a5f5);
            color: #fff;
            border-bottom: none;
            border-top-left-radius: 0.75rem;
            border-top-right-radius: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;
            letter-spacing: 0.05em;
        }
        .modal-content {
            border-radius: 0.75rem;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .form-control {
            border-radius: 0.5rem;
            border: 1.5px solid #cbd5e1;
            padding: 0.75rem 1rem;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-control:focus {
            border-color: #42a5f5;
            box-shadow: 0 0 10px rgba(66, 165, 245, 0.4);
            outline: none;
        }
        label {
            font-weight: 600;
            color: #334155;
        }
        .modal-footer {
            border-top: none;
            padding-top: 1rem;
            gap: 1rem;
            display: flex;
            justify-content: flex-end;
        }
        .btn-primary {
            border-radius: 0.5rem;
            padding: 0.6rem 1.5rem;
            font-weight: 600;
            font-size: 1rem;
            background: linear-gradient(135deg, #42a5f5, #1e88e5);
            border: none;
            box-shadow: 0 6px 16px rgba(66, 165, 245, 0.4);
            transition: all 0.3s ease;
        }
        .btn-primary:hover, .btn-primary:focus {
            background: linear-gradient(135deg, #1e88e5, #1565c0);
            box-shadow: 0 10px 25px rgba(21, 101, 192, 0.5);
            outline: none;
        }
        /* Responsive modal width */
        @media (min-width: 576px) {
            .modal-dialog {
                max-width: 500px;
            }
        }
    </style>
</head>
<body>
    <div class="container py-5 text-center">
        <a href="#" class="btn btn-join" data-bs-toggle="modal" data-bs-target="#joinUsModal">Join Us</a>
    </div>

    <!-- Join Us Modal -->
    <div class="modal fade" id="joinUsModal" tabindex="-1" aria-labelledby="joinUsLabel" aria-hidden="true">
        <div class="modal-dialog">
            <form id="joinForm">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="joinUsLabel">Join Us</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">Full Name <span class="text-danger">*</span></label>
                            <input type="text" name="name" class="form-control" placeholder="Enter your full name" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email Address <span class="text-danger">*</span></label>
                            <input type="email" name="email" class="form-control" placeholder="name@example.com" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" name="phone" class="form-control" placeholder="10-digit phone number" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Your Message <span class="text-danger">*</span></label>
                            <textarea name="message" class="form-control" rows="4" placeholder="Type your message here..." required></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Bootstrap JS Bundle & Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>

<!-- jQuery for AJAX -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script>
  $('#joinForm').on('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    $.ajax({
      url: 'join_insert.php',
      type: 'POST',
      data: $(this).serialize(),
      success: function(response) {
        alert(response); // Show success or error message
        $('#joinForm')[0].reset(); // Reset form
        $('#joinUsModal').modal('hide'); // Hide modal
      },
      error: function() {
        alert('Something went wrong. Please try again.');
      }
    });
  });
</script>
