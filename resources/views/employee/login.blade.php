@extends('admin.layout')

@section('content')
    <form class="form-horizontal" method="POST" action="{{ route('employee.login.post') }}">
        {{ csrf_field() }}

        <div class="form-group{{ $errors->has('login') ? ' has-error' : '' }}">
            <label for="login" class="col-md-4 control-label">Логин</label>

            <div class="col-md-6">
                <input id="login" type="text" class="form-control" name="login" value="{{ old('login') }}" required autofocus>

                @if ($errors->has('login'))
                    <span class="help-block">
                    <strong>{{ $errors->first('login') }}</strong>
                </span>
                @endif
            </div>
        </div>

        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
            <label for="password" class="col-md-4 control-label">Пароль </label>

            <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" required>

                @if ($errors->has('password'))
                    <span class="help-block">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
                @endif
            </div>
        </div>

{{--        <div class="form-group">--}}
{{--            <div class="col-md-6 col-md-offset-4">--}}
{{--                <div class="checkbox">--}}
{{--                    <label>--}}
{{--                        <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}> Remember Me--}}
{{--                    </label>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </div>--}}

        <div class="form-group">
            <div class="col-md-8 col-md-offset-4">
                <button type="submit" class="btn btn-primary">
                    Войти
                </button>

            </div>
        </div>
    </form>
@endsection

