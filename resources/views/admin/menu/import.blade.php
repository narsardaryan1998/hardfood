@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div id="app" class="row">
            <div class="col-md-12">
                <div class="row">
                    <a href="/admin/menu" class="btn float-left addSpan" aria-hidden="true"><i
                            class="fa fa-arrow-left"></i></a>
                    <h1 class="ml-3">Импортировать excel файл</h1>
                </div>
                <div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-6">
                                @if(isset($success))
                                    <div class="alert alert-success" role="alert">
                                        {{$success}}
                                    </div>
                                @elseif(isset($error))
                                    <div class="alert alert-danger" role="alert">
                                        {{$error}}
                                    </div>
                                @endif
                                <form class="row mt-5 w-100" method="post" action="{{ route('importExcel') }}"
                                      enctype="multipart/form-data">
                                    @csrf
                                    <div class="col-12">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="selectDate"><i
                                                        class="fa fa-calendar"></i></label>
                                            </div>
                                            <select class="custom-select" required name="week" id="selectDate">
                                                <option value="0" selected>Дата старта...</option>
                                                @foreach($mondays as $monday)
                                                    <option value="{{$monday}}">{{$monday}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input type="file" name="excel" placeholder="Импорт excel"
                                                   class="btn btn-success"
                                                   accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
                                        </div>
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="submit" class="btn btn-primary w-100" value="Загрузить">
                                    </div>
                                </form>
                                <div class="row w-100">
                                    <div class="form-group col-12">
                                        <button class="btn btn-warning w-100" id="btnGoogle">Загрузить изображения из google диска
                                        </button>
                                    </div>
                                </div>
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
    <script src="{{ asset('js/moment.min.js') }}" defer></script>
    <script src="{{ asset('js/pace.min.js') }}" defer></script>
    <!-- /.container-fluid -->
@endsection
