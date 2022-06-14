@extends('admin.layout')
@section('content')
    <div class="container-fluid">
        <div id="app" class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif

                <div class="row">
                    <a href="/admin/menu" class="btn float-left addSpan" aria-hidden="true"><i
                            class="fa fa-arrow-left"></i></a>
                    <h1 class="ml-3">Добавить нового сотрудника</h1>
                </div>
                <div>
                    <div class="container-fluid">
                        <div>
                            <div>
                                @if(isset($success))
                                    <div class="alert alert-success" role="alert">
                                        {{$success}}
                                    </div>
                                @elseif(isset($error))
                                    <div class="alert alert-danger" role="alert">
                                        {{$error}}
                                    </div>
                                @endif
                                <form method="post" action="{{ route('postAdd') }}">
                                    @csrf
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="login">Логин</label>
                                            <input required type="text" name="login" class="form-control" id="login"
                                                   placeholder="Логин">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Password</label>
                                            <input required type="password" name="password" class="form-control"
                                                   id="inputPassword4" placeholder="Пароль">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="fio">ФИО</label>
                                            <input required type="text" name="fio" class="form-control" id="fio">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="birthDay">Дата рождения</label>
                                            <input required type="date" name="birthday" id="birthDay"
                                                   class="form-control w-100"/>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Email</label>
                                            <input required type="email" name="email" class="form-control" id="inputEmail4"
                                                   placeholder="Email">
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputState">Роль</label>
                                            <select required id="inputState" name="role" class="form-control">
                                                <option selected>Выберете...</option>
                                                <option value="2">Администратор</option>
                                                <option value="3">Сотрудник</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-3">
                                            <label for="inputState">Пол</label>
                                            <select required id="inputState" name="gender" class="form-control">
                                                <option selected>Выберете...</option>
                                                <option value="m">Мужчина</option>
                                                <option value="w">Женщина</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Зарегистрировать</button>
                                </form>
                            </div>
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection
