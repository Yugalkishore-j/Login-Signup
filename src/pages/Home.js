import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col d-flex justify-content-between align-items-center">
          <h1 className="display-5">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="btn btn-outline-danger"
          >
            Logout
          </button>
        </div>
      </div>
      
      <div className="row">
        <div className="col-lg-12 mb-4">
          <div className="card bg-light">
            <div className="card-body">
              <h2 className="card-title">Welcome, {currentUser.name || currentUser.email}!</h2>
              <p className="card-text text-muted">
                This is a protected home page. You can only see this content when you're logged in.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-primary border-top-0 border-end-0 border-bottom-0 border-3">
            <div className="card-body">
              <h3 className="card-title">Your Account</h3>
              <div className="mb-2"><strong>Email:</strong> {currentUser.email}</div>
              {currentUser.name && <div><strong>Name:</strong> {currentUser.name}</div>}
            </div>
          </div>
        </div>
        
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-success border-top-0 border-end-0 border-bottom-0 border-3">
            <div className="card-body">
              <h3 className="card-title">Features</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent">Protected routes with React Router</li>
                <li className="list-group-item bg-transparent">Authentication state with Context API</li>
                <li className="list-group-item bg-transparent">Form validation with React Hook Form</li>
                <li className="list-group-item bg-transparent">Session persistence with localStorage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};